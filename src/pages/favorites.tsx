import { useSelector } from "react-redux"
import styled from "styled-components"
import TrackList from "../components/TrackList"
import Link from 'next/link'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    img {
        cursor: pointer;
        width: 14rem;
        align-self: flex-start;
    }
`

const Favorites = () => {
    const tracks = useSelector((state: any) => state.data)

    return (
        <>
            <Header>
                <Link href="/">
                    <img src="logo.svg" alt="Logotipo"/>
                </Link>
            </Header>
            <TrackList tracks={tracks} />
        </>
    )
}

export default Favorites