import { Container, FlexColumn, IconsSpace } from './styles'
import { AiOutlineHeart, AiFillPlayCircle, AiFillPauseCircle, AiFillHeart } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export interface ITrack {
    id: string | number
    audio: string
    image: string
    title: string
    artist: string
    duration: number    
}

interface Props {
    data: ITrack
}

function secondsToMinutes(seconds: number) {
    const minutes = Math.floor(seconds / 60)
    const remainSeconds = seconds - (minutes * 60)

    return `${minutes}:${remainSeconds.toString().padStart(2, '0')}`
}

const Track: React.FC<Props> = ({ data }) => {
    const [audio, setAudio] = useState<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const favTracks = useSelector((state: any) => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        setAudio(new Audio(data.audio))
    }, [])

    useEffect(() => {
        if (audio !== null) {
            audio.onended = () => setIsPlaying(false)
            audio.volume = .2
        }
    }, [audio])

    function play() {
        audio.play()
        .then(() => setIsPlaying(true))
    }

    function pause() {
        audio.pause()
        setIsPlaying(false)
    }

    return (
        <Container>
            <img src={data.image} alt="fon"/>
            <FlexColumn>
                <FlexColumn>
                    <h3>{data.title}</h3>
                    <span>{data.artist}</span>
                    <span>{secondsToMinutes(Number(data.duration))}</span>
                </FlexColumn>
                <IconsSpace>
                    <div>
                        {favTracks.map(track => track.id).includes(data.id)
                            ? <AiFillHeart onClick={() => dispatch({type: 'REMOVE_TRACK', id: data.id})} className="heart fav" />
                            : <AiOutlineHeart onClick={() => dispatch({type: 'ADD_TRACK', track: data})} className="heart" />} 
                        <FiExternalLink />
                    </div>
                    {isPlaying
                        ? <AiFillPauseCircle onClick={pause} />
                        : <AiFillPlayCircle onClick={play} />}
                </IconsSpace>
            </FlexColumn>
        </Container>
    )
}

export default Track