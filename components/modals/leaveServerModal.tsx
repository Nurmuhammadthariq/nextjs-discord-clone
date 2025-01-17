'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { useModal } from '@/hooks/use-modal-store'
import { Button } from '@/components/ui/button'

export const LeaveServerModal = () => {
	const { isOpen, onClose, type, data } = useModal()
	const router = useRouter()

	const isModalOpen = isOpen && type === "leaveServer"
	const { server } = data

	const [isLoading, setIsLoading] = useState(false)

	const onClick = () => {
		try {
			console.log("Shut up you mother fucker!")
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent className='bg-white text-black p-0 overflow-hidden'>
				<DialogHeader className='pt-8 px-6'>
					<DialogTitle className='text-2xl text-center font-bold'>
						Leave Server
					</DialogTitle>
					<DialogDescription className='text-center text-zinc-500'>
						Are you sure want to leave <span className='font-semibold text-indigo-500'>{server?.name}</span>
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className='bg-gray-200 px-6 py-4'>
					<div className="flex items-center justify-between w-full">
						<Button
							disabled={isLoading}
							onClick={onClose}
							variant="default"
						>
							Cancel
						</Button>
						<Button
							disabled={isLoading}
							onClick={onClick}
							variant="primary"
						>
							Confirm
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
  )
}
