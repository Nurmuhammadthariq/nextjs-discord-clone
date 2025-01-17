import React from 'react'
import { ChannelType, MemberRole } from "@prisma/client"
import { redirect } from 'next/navigation'
import { Hash, Mic, ShieldAlert, ShieldCheck, Video } from 'lucide-react'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { currentProfile } from '@/lib/current-profile'
import { db } from '@/lib/db'

import { ServerHeader } from './server-header'

interface ServerSideProps {
  serverId: string
}

const ServerSideBar = async ({ serverId }: ServerSideProps) => {
  const profile = await currentProfile()

  if (!profile) {
    return redirect('/')
  }

  const server = await db.server.findUnique({
    where: {
      id: serverId
    },
    include: {
      channels: {
        orderBy: {
          createdAt: 'asc'
        }
      },
      members: {
        include: {
          profile: true,
        },
        orderBy: {
          role: 'asc'
        }
      }
    }
  })

  // console.log(server)
  const textChannels = server?.channels.filter(channel => channel.type === ChannelType.TEXT)
  const audioChannels = server?.channels.filter(channel => channel.type === ChannelType.AUDIO)

  const members = server?.members.filter((member) => member.profileId !== profile.id)

  if (!server) {
    return redirect('/')
  }
  
  const role = server?.members.find((member) => member.profileId === profile.id)?.role


  return (
    <div className='flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]'>
      <ServerHeader
        server={server}
        role={role}
      />
    </div>
  )
}

export default ServerSideBar