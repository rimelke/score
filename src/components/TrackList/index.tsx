import React from "react"
import Track, { ITrack } from "../Track"
import { Container } from './styles'

interface Props {
    tracks: ITrack[]
}

const TrackList: React.FC<Props> = ({ tracks }) => {
    return (
        <Container>
            {tracks.map(track => (
                <Track key={track.id} data={track} />
            ))}
        </Container>
    )
}

export default TrackList