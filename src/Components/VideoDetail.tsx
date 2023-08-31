import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface VideoDetailsProps {
    videoID?: string;
}

interface VideoSnippet {
    title: string;
    description: string;
    publishedAt: string;
    channelTitle: string;
}

interface VideoResponseItem {
    snippet: VideoSnippet;
}

const API_KEY = 'AIzaSyCx8xBt-6gpuVUF8i5nHWOl97Al0lvnBNI';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

export const VideoDetails: React.FC<VideoDetailsProps> = ({ videoID }) => {
    const [videoDetails, setVideoDetails] = useState<VideoResponseItem | null>(null);

    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}videos`, {
                    params: {
                        key: API_KEY,
                        part: 'snippet',
                        id: videoID,
                    },
                });

                setVideoDetails(response.data.items[0]);
            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        };

        fetchVideoDetails();
    }, [videoID]);

    return (
        <div>
            {videoDetails && (
                <div>
                    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
                        <iframe
                            src={`https://www.youtube.com/embed/${videoID}`}
                            title="Embedded Video"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoDetails;
