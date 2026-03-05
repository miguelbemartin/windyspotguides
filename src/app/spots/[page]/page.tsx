'use client'
import { useParams } from 'next/navigation'
import SpotsList from '../spots-list'

export default function Page() {
    const params = useParams()
    const page = Number(params.page) || 1
    return <SpotsList page={page} />
}
