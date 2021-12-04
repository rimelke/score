import axios from "axios"
import { GetStaticProps } from "next"
import { useState } from "react"
import styled from "styled-components"
import TrackList from "../components/TrackList"
import api from "../services/api"
import Link from 'next/link'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }

    img {
        width: 14rem;
        align-self: flex-start;
    }

    input {
        padding: .4rem .8rem;
        border-radius: 0;
        border: 1px solid #696969;
        outline: none;
        font-size: .9rem;
        width: 70%;
        text-align: center;
    }

    a {
        align-self: flex-end;
        color: black;
        text-decoration: none;
    }
`

const Home = props => {
    const [tracks, setTracks] = useState(props.tracks)

    function search(value: string) {
        if (value !== '')
            axios.get(`/api/search?q=${value}`)
            .then(res => setTracks(res.data.data))
        else
            setTracks(props.tracks)
    }

    return (
        <>
            <Header>
                <div>
                    <img src="logo.svg" alt="Logotipo"/>
                </div>
                <div>
                    <input placeholder="Pesquise por algo" type="text" onChange={e => search(e.target.value)}/>
                </div>
                <div>
                    <Link href="/favorites">Suas favoritas</Link>
                </div>
            </Header>
            <TrackList tracks={tracks.map(track => ({
                artist: track.artist.name,
                audio: track.preview,
                duration: track.duration,
                image: track.album.cover,
                title: track.title_short,
                id: track.id,
                link: track.link
            }))} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ctx => {
    const { data } = await api.get('/chart/0/tracks?limit=15')

    return {
        props: {
            tracks: data.data
        },
        revalidate: 3600
    }
}

export default Home