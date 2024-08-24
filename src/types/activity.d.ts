declare type ActivityConfig = {
    status?: import("discord.js").PresenceUpdateStatus,
    activities?: { name: string }[]
    timeout?: number
}