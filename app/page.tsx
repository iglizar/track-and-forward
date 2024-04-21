"use client"
import { useEffect } from 'react'

const RedirectPage = () => {
	useEffect(() => {
    window.location.href = process.env.REDIRECT_URL as string
  }, [])

  return <div>Redirecting...</div>
}

export default RedirectPage