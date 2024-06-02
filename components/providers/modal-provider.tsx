"use client"

import { useState, useEffect } from 'react'

import { InviteModal } from '@/components/modals/invite-modal'
import CreateServerModal from "@/components/modals/createServerModal"
import EditServerModal from '@/components/modals/edit-server-modal'
import { MembersModal } from '@/components/modals/members-modal'

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
			<EditServerModal />
			<MembersModal />
		</>
	)
}