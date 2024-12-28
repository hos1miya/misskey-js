export declare const notificationTypes: readonly ["follow", "mention", "reply", "renote", "quote", "reaction", "pollVote", "pollEnded", "receiveFollowRequest", "followRequestAccepted", "groupInvited", "app"];
export declare const noteVisibilities: readonly ["public", "home", "followers", "specified"];
export declare const mutedNoteReasons: readonly ["word", "manual", "spam", "other"];
export declare const ffVisibility: readonly ["public", "followers", "private"];
export declare const permissions: string[];
export declare const moderationLogTypes: readonly ["updateServerSettings", "suspend", "unsuspend", "updateUserNote", "addCustomEmoji", "updateCustomEmoji", "deleteCustomEmoji", "assignRole", "unassignRole", "createRole", "updateRole", "deleteRole", "clearQueue", "promoteQueue", "deleteDriveFile", "deleteNote", "createGlobalAnnouncement", "createUserAnnouncement", "updateGlobalAnnouncement", "updateUserAnnouncement", "deleteGlobalAnnouncement", "deleteUserAnnouncement", "resetPassword", "suspendRemoteInstance", "unsuspendRemoteInstance", "markSensitiveDriveFile", "unmarkSensitiveDriveFile", "resolveAbuseReport", "createInvitation", "createAd", "updateAd", "deleteAd", "createAvatarDecoration", "updateAvatarDecoration", "deleteAvatarDecoration"];
export declare type ModerationLogPayloads = {
    updateServerSettings: {
        before: any | null;
        after: any | null;
    };
    suspend: {
        userId: string;
        userUsername: string;
        userHost: string | null;
    };
    unsuspend: {
        userId: string;
        userUsername: string;
        userHost: string | null;
    };
    updateUserNote: {
        userId: string;
        userUsername: string;
        userHost: string | null;
        before: string | null;
        after: string | null;
    };
    addCustomEmoji: {
        emojiId: string;
        emoji: any;
    };
    updateCustomEmoji: {
        emojiId: string;
        before: any;
        after: any;
    };
    deleteCustomEmoji: {
        emojiId: string;
        emoji: any;
    };
    assignRole: {
        userId: string;
        userUsername: string;
        userHost: string | null;
        roleId: string;
        roleName: string;
        expiresAt: string | null;
    };
    unassignRole: {
        userId: string;
        userUsername: string;
        userHost: string | null;
        roleId: string;
        roleName: string;
    };
    createRole: {
        roleId: string;
        role: any;
    };
    updateRole: {
        roleId: string;
        before: any;
        after: any;
    };
    deleteRole: {
        roleId: string;
        role: any;
    };
    clearQueue: Record<string, never>;
    promoteQueue: Record<string, never>;
    deleteDriveFile: {
        fileId: string;
        fileUserId: string | null;
        fileUserUsername: string | null;
        fileUserHost: string | null;
    };
    deleteNote: {
        noteId: string;
        noteUserId: string;
        noteUserUsername: string;
        noteUserHost: string | null;
        note: any;
    };
    createGlobalAnnouncement: {
        announcementId: string;
        announcement: any;
    };
    createUserAnnouncement: {
        announcementId: string;
        announcement: any;
        userId: string;
        userUsername: string;
        userHost: string | null;
    };
    updateGlobalAnnouncement: {
        announcementId: string;
        before: any;
        after: any;
    };
    updateUserAnnouncement: {
        announcementId: string;
        before: any;
        after: any;
        userId: string;
        userUsername: string;
        userHost: string | null;
    };
    deleteGlobalAnnouncement: {
        announcementId: string;
        announcement: any;
    };
    deleteUserAnnouncement: {
        announcementId: string;
        announcement: any;
        userId: string;
        userUsername: string;
        userHost: string | null;
    };
    resetPassword: {
        userId: string;
        userUsername: string;
        userHost: string | null;
    };
    suspendRemoteInstance: {
        id: string;
        host: string;
    };
    unsuspendRemoteInstance: {
        id: string;
        host: string;
    };
    markSensitiveDriveFile: {
        fileId: string;
        fileUserId: string | null;
        fileUserUsername: string | null;
        fileUserHost: string | null;
    };
    unmarkSensitiveDriveFile: {
        fileId: string;
        fileUserId: string | null;
        fileUserUsername: string | null;
        fileUserHost: string | null;
    };
    resolveAbuseReport: {
        reportId: string;
        report: any;
        forwarded: boolean;
    };
    createInvitation: {
        invitations: any[];
    };
    createAd: {
        adId: string;
        ad: any;
    };
    updateAd: {
        adId: string;
        before: any;
        after: any;
    };
    deleteAd: {
        adId: string;
        ad: any;
    };
    createAvatarDecoration: {
        avatarDecorationId: string;
        avatarDecoration: any;
    };
    updateAvatarDecoration: {
        avatarDecorationId: string;
        before: any;
        after: any;
    };
    deleteAvatarDecoration: {
        avatarDecorationId: string;
        avatarDecoration: any;
    };
};
//# sourceMappingURL=consts.d.ts.map