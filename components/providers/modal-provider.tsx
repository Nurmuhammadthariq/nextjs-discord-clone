"use client"

import { useState, useEffect } from 'react'

import { InviteModal } from '@/components/modals/invite-modal'
import CreateServerModal from "@/components/modals/createServerModal"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}

	return (
		<>
			<InviteModal />
			<CreateServerModal />
		</>
	)
}