import { useCallback, useEffect, useState } from 'react';
import { ApolloError, useApolloClient } from '@apollo/client';
import { ChatAssetsQuery, ChatAssetsQueryVariables, ChatAssetType } from '../../../types/generated/graphql';
import { ChatAssetsQueryDefinition } from '../../AssetList';
import { log } from '../../../utils/log';
import { EventIds } from '../../../constants';

export const useSubmissions = (channelId: string, canSeeSubmissions: boolean) => {
    const [error, setError] = useState<ApolloError | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [totalAudioSubmissions, setTotalAudioSubmissions] = useState<number | undefined>(undefined);
    const apolloClient = useApolloClient();
    const refetchTotalAudioSubmissions = useCallback(
        async (channelId: string): Promise<void> => {
            try {
                setLoading(true);
                setError(undefined);

                const response = await apolloClient.query<ChatAssetsQuery, ChatAssetsQueryVariables>({
                    query: ChatAssetsQueryDefinition,
                    variables: {
                        channelId: channelId,
                        first: 1,
                        assetTypes: [ChatAssetType.Audio],
                        search: '',
                    },
                    fetchPolicy: 'network-only',
                });

                const totalAudioSubmissions = response.data?.chatAssets?.pageInfo?.totalRecords;
                setTotalAudioSubmissions(totalAudioSubmissions);

                setLoading(false);
            } catch (error) {
                if (error instanceof ApolloError) {
                    setError(error);
                }
                log.error('Failed to get audio submissions', EventIds.GetAudioSubmissionsError, error, {
                    channelId,
                });
            }
        },
        [apolloClient],
    );

    useEffect(() => {
        if (channelId && canSeeSubmissions) {
            refetchTotalAudioSubmissions(channelId);
        }
    }, [channelId, canSeeSubmissions, refetchTotalAudioSubmissions]);

    return { error, loading, totalAudioSubmissions, refetchTotalAudioSubmissions };
};
