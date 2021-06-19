import {
	Ad, Announcement, Antenna, App, AuthSession, Channel, Clip, DateString, DetailedInstanceMetadata, DriveFile, DriveFolder, FollowRequest, GalleryPost, InstanceMetadata,
	LiteInstanceMetadata,
	MeDetailed,
	Note, NoteFavorite, OriginType, Page, ServerInfo, Stats, User, UserDetailed, UserGroup, UserList, UserSorting
} from './entities';

type TODO = Record<string, any> | null;

type ShowUserReq = { username: string; host?: string; } | { userId: User['id']; };

export type Endpoints = {
	// admin
	'admin/abuse-user-reports': { req: TODO; res: TODO; };
	'admin/delete-all-files-of-a-user': { req: { userId: User['id']; }; res: null; };
	'admin/delete-logs': { req: {}; res: null; };
	'admin/get-index-stats': { req: TODO; res: TODO; };
	'admin/get-table-stats': { req: TODO; res: TODO; };
	'admin/invite': { req: TODO; res: TODO; };
	'admin/logs': { req: TODO; res: TODO; };
	'admin/reset-password': { req: TODO; res: TODO; };
	'admin/resolve-abuse-user-report': { req: TODO; res: TODO; };
	'admin/resync-chart': { req: TODO; res: TODO; };
	'admin/send-email': { req: TODO; res: TODO; };
	'admin/server-info': { req: TODO; res: TODO; };
	'admin/show-moderation-logs': { req: TODO; res: TODO; };
	'admin/show-user': { req: TODO; res: TODO; };
	'admin/show-users': { req: TODO; res: TODO; };
	'admin/silence-user': { req: TODO; res: TODO; };
	'admin/suspend-user': { req: TODO; res: TODO; };
	'admin/unsilence-user': { req: TODO; res: TODO; };
	'admin/unsuspend-user': { req: TODO; res: TODO; };
	'admin/update-meta': { req: TODO; res: TODO; };
	'admin/vacuum': { req: TODO; res: TODO; };
	'admin/accounts/create': { req: TODO; res: TODO; };
	'admin/ad/create': { req: TODO; res: TODO; };
	'admin/ad/delete': { req: { id: Ad['id']; }; res: null; };
	'admin/ad/list': { req: TODO; res: TODO; };
	'admin/ad/update': { req: TODO; res: TODO; };
	'admin/announcements/create': { req: TODO; res: TODO; };
	'admin/announcements/delete': { req: { id: Announcement['id'] }; res: null; };
	'admin/announcements/list': { req: TODO; res: TODO; };
	'admin/announcements/update': { req: TODO; res: TODO; };
	'admin/drive/clean-remote-files': { req: TODO; res: TODO; };
	'admin/drive/cleanup': { req: TODO; res: TODO; };
	'admin/drive/files': { req: TODO; res: TODO; };
	'admin/drive/show-file': { req: TODO; res: TODO; };
	'admin/emoji/add': { req: TODO; res: TODO; };
	'admin/emoji/copy': { req: TODO; res: TODO; };
	'admin/emoji/list-remote': { req: TODO; res: TODO; };
	'admin/emoji/list': { req: TODO; res: TODO; };
	'admin/emoji/remove': { req: TODO; res: TODO; };
	'admin/emoji/update': { req: TODO; res: TODO; };
	'admin/federation/delete-all-files': { req: { host: string; }; res: null; };
	'admin/federation/refresh-remote-instance-metadata': { req: TODO; res: TODO; };
	'admin/federation/remove-all-following': { req: TODO; res: TODO; };
	'admin/federation/update-instance': { req: TODO; res: TODO; };
	'admin/moderators/add': { req: TODO; res: TODO; };
	'admin/moderators/remove': { req: TODO; res: TODO; };
	'admin/promo/create': { req: TODO; res: TODO; };
	'admin/queue/clear': { req: TODO; res: TODO; };
	'admin/queue/deliver-delayed': { req: TODO; res: TODO; };
	'admin/queue/inbox-delayed': { req: TODO; res: TODO; };
	'admin/queue/jobs': { req: TODO; res: TODO; };
	'admin/queue/stats': { req: TODO; res: TODO; };
	'admin/relays/add': { req: TODO; res: TODO; };
	'admin/relays/list': { req: TODO; res: TODO; };
	'admin/relays/remove': { req: TODO; res: TODO; };

	// announcements
	'announcements': { req: { limit?: number; withUnreads?: boolean; sinceId?: Announcement['id']; untilId?: Announcement['id']; }; res: Announcement[]; };

	// antennas
	'antennas/create': { req: TODO; res: Antenna; };
	'antennas/delete': { req: { antennaId: Antenna['id']; }; res: null; };
	'antennas/list': { req: {}; res: Antenna[]; };
	'antennas/notes': { req: { antennaId: Antenna['id']; limit?: number; sinceId?: Note['id']; untilId?: Note['id']; }; res: Note[]; };
	'antennas/show': { req: { antennaId: Antenna['id']; }; res: Antenna; };
	'antennas/update': { req: TODO; res: Antenna; };

	// ap
	'ap/get': { req: TODO; res: TODO; };
	'ap/show': { req: TODO; res: TODO; };

	// app
	'app/create': { req: TODO; res: App; };
	'app/show': { req: { appId: App['id']; }; res: App; };

	// auth
	'auth/accept': { req: { token: string; }; res: null; };
	'auth/session/generate': { req: { appSecret: string; }; res: { token: string; url: string; }; };
	'auth/session/show': { req: { token: string; }; res: AuthSession; };
	'auth/session/userkey': { req: { appSecret: string; token: string; }; res: { accessToken: string; user: User }; };

	// blocking
	'blocking/create': { req: TODO; res: TODO; };
	'blocking/delete': { req: TODO; res: TODO; };
	'blocking/list': { req: TODO; res: TODO; };

	// channels
	'channels/create': { req: TODO; res: TODO; };
	'channels/featured': { req: TODO; res: TODO; };
	'channels/follow': { req: TODO; res: TODO; };
	'channels/followed': { req: TODO; res: TODO; };
	'channels/owned': { req: TODO; res: TODO; };
	'channels/pin-note': { req: TODO; res: TODO; };
	'channels/show': { req: TODO; res: TODO; };
	'channels/timeline': { req: TODO; res: TODO; };
	'channels/unfollow': { req: TODO; res: TODO; };
	'channels/update': { req: TODO; res: TODO; };

	// charts
	'charts/active-users': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; }; res: {
		local: {
			users: number[];
		};
		remote: {
			users: number[];
		};
	}; };
	'charts/drive': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; }; res: {
		local: {
			decCount: number[];
			decSize: number[];
			incCount: number[];
			incSize: number[];
			totalCount: number[];
			totalSize: number[];
		};
		remote: {
			decCount: number[];
			decSize: number[];
			incCount: number[];
			incSize: number[];
			totalCount: number[];
			totalSize: number[];
		};
	}; };
	'charts/federation': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; }; res: {
		instance: {
			dec: number[];
			inc: number[];
			total: number[];
		};
	}; };
	'charts/hashtag': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; }; res: TODO; };
	'charts/instance': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; host: string; }; res: {
		drive: {
			decFiles: number[];
			decUsage: number[];
			incFiles: number[];
			incUsage: number[];
			totalFiles: number[];
			totalUsage: number[];
		};
		followers: {
			dec: number[];
			inc: number[];
			total: number[];
		};
		following: {
			dec: number[];
			inc: number[];
			total: number[];
		};
		notes: {
			dec: number[];
			inc: number[];
			total: number[];
			diffs: {
				normal: number[];
				renote: number[];
				reply: number[];
			};
		};
		requests: {
			failed: number[];
			received: number[];
			succeeded: number[];
		};
		users: {
			dec: number[];
			inc: number[];
			total: number[];
		};
	}; };
	'charts/network': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; }; res: TODO; };
	'charts/notes': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; }; res: {
		local: {
			dec: number[];
			inc: number[];
			total: number[];
			diffs: {
				normal: number[];
				renote: number[];
				reply: number[];
			};
		};
		remote: {
			dec: number[];
			inc: number[];
			total: number[];
			diffs: {
				normal: number[];
				renote: number[];
				reply: number[];
			};
		};
	}; };
	'charts/user/drive': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; userId: User['id']; }; res: {
		decCount: number[];
		decSize: number[];
		incCount: number[];
		incSize: number[];
		totalCount: number[];
		totalSize: number[];
	}; };
	'charts/user/following': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; userId: User['id']; }; res: TODO; };
	'charts/user/notes': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; userId: User['id']; }; res: {
		dec: number[];
		inc: number[];
		total: number[];
		diffs: {
			normal: number[];
			renote: number[];
			reply: number[];
		};
	}; };
	'charts/user/reactions': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; userId: User['id']; }; res: TODO; };
	'charts/users': { req: { span: 'day' | 'hour'; limit?: number; offset?: number | null; }; res: {
		local: {
			dec: number[];
			inc: number[];
			total: number[];
		};
		remote: {
			dec: number[];
			inc: number[];
			total: number[];
		};
	}; };

	// clips
	'clips/add-note': { req: TODO; res: TODO; };
	'clips/create': { req: TODO; res: TODO; };
	'clips/delete': { req: { clipId: Clip['id']; }; res: null; };
	'clips/list': { req: TODO; res: TODO; };
	'clips/notes': { req: TODO; res: TODO; };
	'clips/show': { req: TODO; res: TODO; };
	'clips/update': { req: TODO; res: TODO; };

	// drive
	'drive': { req: {}; res: { capacity: number; usage: number; }; };
	'drive/files': { req: TODO; res: TODO; };
	'drive/files/attached-notes': { req: TODO; res: TODO; };
	'drive/files/check-existence': { req: TODO; res: TODO; };
	'drive/files/create': { req: TODO; res: TODO; };
	'drive/files/delete': { req: { fileId: DriveFile['id']; }; res: null; };
	'drive/files/find-by-hash': { req: TODO; res: TODO; };
	'drive/files/find': { req: TODO; res: TODO; };
	'drive/files/show': { req: TODO; res: TODO; };
	'drive/files/update': { req: TODO; res: TODO; };
	'drive/files/upload-from-url': { req: TODO; res: TODO; };
	'drive/folders': { req: TODO; res: TODO; };
	'drive/folders/create': { req: TODO; res: TODO; };
	'drive/folders/delete': { req: { folderId: DriveFolder['id']; }; res: null; };
	'drive/folders/find': { req: TODO; res: TODO; };
	'drive/folders/show': { req: TODO; res: TODO; };
	'drive/folders/update': { req: TODO; res: TODO; };
	'drive/stream': { req: TODO; res: TODO; };

	// endpoint
	'endpoint': { req: { endpoint: string; }; res: { params: { name: string; type: string; }[]; }; };

	// endpoints
	'endpoints': { req: {}; res: string[]; };

	// federation
	'federation/dns': { req: TODO; res: TODO; };
	'federation/followers': { req: TODO; res: TODO; };
	'federation/following': { req: TODO; res: TODO; };
	'federation/instances': { req: TODO; res: TODO; };
	'federation/show-instance': { req: TODO; res: TODO; };
	'federation/update-remote-user': { req: TODO; res: TODO; };
	'federation/users': { req: TODO; res: TODO; };

	// following
	'following/create': { req: { userId: User['id'] }; res: User; };
	'following/delete': { req: { userId: User['id'] }; res: User; };
	'following/requests/accept': { req: { userId: User['id'] }; res: null; };
	'following/requests/cancel': { req: { userId: User['id'] }; res: User; };
	'following/requests/list': { req: {}; res: FollowRequest[]; };
	'following/requests/reject': { req: { userId: User['id'] }; res: null; };

	// gallery
	'gallery/featured': { req: TODO; res: TODO; };
	'gallery/popular': { req: TODO; res: TODO; };
	'gallery/posts': { req: TODO; res: TODO; };
	'gallery/posts/create': { req: TODO; res: TODO; };
	'gallery/posts/delete': { req: { postId: GalleryPost['id'] }; res: null; };
	'gallery/posts/like': { req: TODO; res: TODO; };
	'gallery/posts/show': { req: TODO; res: TODO; };
	'gallery/posts/unlike': { req: TODO; res: TODO; };
	'gallery/posts/update': { req: TODO; res: TODO; };

	// games
	'games/reversi/games': { req: TODO; res: TODO; };
	'games/reversi/games/show': { req: TODO; res: TODO; };
	'games/reversi/games/surrender': { req: TODO; res: TODO; };
	'games/reversi/invitations': { req: TODO; res: TODO; };
	'games/reversi/match': { req: TODO; res: TODO; };
	'games/reversi/match/cancel': { req: TODO; res: TODO; };

	// get-online-users-count
	'get-online-users-count': { req: {}; res: { count: number; }; };

	// hashtags
	'hashtags/list': { req: TODO; res: TODO; };
	'hashtags/search': { req: TODO; res: TODO; };
	'hashtags/show': { req: TODO; res: TODO; };
	'hashtags/trend': { req: TODO; res: TODO; };
	'hashtags/users': { req: TODO; res: TODO; };

	// i
	'i': { req: {}; res: User; };
	'i/apps': { req: TODO; res: TODO; };
	'i/authorized-apps': { req: TODO; res: TODO; };
	'i/change-password': { req: TODO; res: TODO; };
	'i/delete-account': { req: { password: string; }; res: null; };
	'i/export-blocking': { req: TODO; res: TODO; };
	'i/export-following': { req: TODO; res: TODO; };
	'i/export-mute': { req: TODO; res: TODO; };
	'i/export-notes': { req: TODO; res: TODO; };
	'i/export-user-lists': { req: TODO; res: TODO; };
	'i/favorites': { req: TODO; res: NoteFavorite[]; };
	'i/gallery/likes': { req: TODO; res: TODO; };
	'i/gallery/posts': { req: TODO; res: TODO; };
	'i/get-word-muted-notes-count': { req: TODO; res: TODO; };
	'i/import-following': { req: TODO; res: TODO; };
	'i/import-user-lists': { req: TODO; res: TODO; };
	'i/notifications': { req: TODO; res: TODO; };
	'i/page-likes': { req: TODO; res: TODO; };
	'i/pages': { req: TODO; res: TODO; };
	'i/pin': { req: { noteId: Note['id']; }; res: MeDetailed; };
	'i/read-all-messaging-messages': { req: TODO; res: TODO; };
	'i/read-all-unread-notes': { req: TODO; res: TODO; };
	'i/read-announcement': { req: TODO; res: TODO; };
	'i/regenerate-token': { req: { password: string; }; res: null; };
	'i/registry/get-all': { req: { scope?: string[]; }; res: Record<string, any>; };
	'i/registry/get-detail': { req: { key: string; scope?: string[]; }; res: { updatedAt: DateString; value: any; }; };
	'i/registry/get': { req: { key: string; scope?: string[]; }; res: any; };
	'i/registry/keys-with-type': { req: { scope?: string[]; }; res: Record<string, 'null' | 'array' | 'number' | 'string' | 'boolean' | 'object'>; };
	'i/registry/keys': { req: { scope?: string[]; }; res: string[]; };
	'i/registry/remove': { req: { key: string; scope?: string[]; }; res: null; };
	'i/registry/scopes': { req: {}; res: string[][]; };
	'i/registry/set': { req: { key: string; value: any; scope?: string[]; }; res: null; };
	'i/revoke-token': { req: TODO; res: TODO; };
	'i/signin-history': { req: TODO; res: TODO; };
	'i/unpin': { req: TODO; res: TODO; };
	'i/update-email': { req: TODO; res: TODO; };
	'i/update': { req: TODO; res: MeDetailed; };
	'i/user-group-invites': { req: TODO; res: TODO; };
	'i/2fa/done': { req: TODO; res: TODO; };
	'i/2fa/key-done': { req: TODO; res: TODO; };
	'i/2fa/password-less': { req: TODO; res: TODO; };
	'i/2fa/register-key': { req: TODO; res: TODO; };
	'i/2fa/register': { req: TODO; res: TODO; };
	'i/2fa/remove-key': { req: TODO; res: TODO; };
	'i/2fa/unregister': { req: TODO; res: TODO; };

	// messaging
	'messaging/history': { req: TODO; res: TODO; };
	'messaging/messages': { req: TODO; res: TODO; };
	'messaging/messages/create': { req: TODO; res: TODO; };
	'messaging/messages/delete': { req: TODO; res: TODO; };
	'messaging/messages/read': { req: TODO; res: TODO; };

	// meta
	'meta': { req: { detail?: boolean; }; res: {
		$switch: {
			$cases: [[
				{ detail: true; },
				DetailedInstanceMetadata,
			]];
			$default: LiteInstanceMetadata;
		};
	}; };

	// miauth
	'miauth/gen-token': { req: TODO; res: TODO; };

	// mute
	'mute/create': { req: TODO; res: TODO; };
	'mute/delete': { req: { userId: User['id'] }; res: null; };
	'mute/list': { req: TODO; res: TODO; };

	// my
	'my/apps': { req: TODO; res: TODO; };

	// notes
	'notes': { req: { limit?: number; sinceId?: Note['id']; untilId?: Note['id']; }; res: Note[]; };
	'notes/children': { req: { noteId: Note['id']; limit?: number; sinceId?: Note['id']; untilId?: Note['id']; }; res: Note[]; };
	'notes/clips': { req: TODO; res: TODO; };
	'notes/conversation': { req: TODO; res: TODO; };
	'notes/create': { req: {
		visibility?: 'public' | 'home' | 'followers' | 'specified',
		visibleUserIds?: User['id'][];
		text?: null | string;
		cw?: null | string;
		viaMobile?: boolean;
		localOnly?: boolean;
		fileIds?: DriveFile['id'][];
		replyId?: null | Note['id'];
		renoteId?: null | Note['id'];
		channelId?: null | Channel['id'];
		poll?: null | {
			choices: string[];
			multiple?: boolean;
			expiresAt?: null | number;
			expiredAfter?: null | number;
		};
	}; res: { createdNote: Note }; };
	'notes/delete': { req: { noteId: Note['id']; }; res: null; };
	'notes/favorites/create': { req: TODO; res: TODO; };
	'notes/favorites/delete': { req: { noteId: Note['id']; }; res: null; };
	'notes/featured': { req: TODO; res: Note[]; };
	'notes/global-timeline': { req: { limit?: number; sinceId?: Note['id']; untilId?: Note['id']; sinceDate?: number; untilDate?: number; }; res: Note[]; };
	'notes/hybrid-timeline': { req: { limit?: number; sinceId?: Note['id']; untilId?: Note['id']; sinceDate?: number; untilDate?: number; }; res: Note[]; };
	'notes/local-timeline': { req: { limit?: number; sinceId?: Note['id']; untilId?: Note['id']; sinceDate?: number; untilDate?: number; }; res: Note[]; };
	'notes/mentions': { req: { following?: boolean; limit?: number; sinceId?: Note['id']; untilId?: Note['id']; }; res: Note[]; };
	'notes/polls/recommendation': { req: TODO; res: TODO; };
	'notes/polls/vote': { req: TODO; res: TODO; };
	'notes/reactions': { req: TODO; res: TODO; };
	'notes/reactions/create': { req: { noteId: Note['id']; reaction: string; }; res: null; };
	'notes/reactions/delete': { req: { noteId: Note['id']; }; res: null; };
	'notes/renotes': { req: TODO; res: TODO; };
	'notes/replies': { req: TODO; res: TODO; };
	'notes/search-by-tag': { req: TODO; res: TODO; };
	'notes/search': { req: TODO; res: TODO; };
	'notes/show': { req: { noteId: Note['id']; }; res: Note; };
	'notes/state': { req: TODO; res: TODO; };
	'notes/timeline': { req: { limit?: number; sinceId?: Note['id']; untilId?: Note['id']; sinceDate?: number; untilDate?: number; }; res: Note[]; };
	'notes/unrenote': { req: { noteId: Note['id']; }; res: null; };
	'notes/user-list-timeline': { req: TODO; res: TODO; };
	'notes/watching/create': { req: TODO; res: TODO; };
	'notes/watching/delete': { req: { noteId: Note['id']; }; res: null; };

	// notifications
	'notifications/create': { req: TODO; res: TODO; };
	'notifications/mark-all-as-read': { req: {}; res: null; };
	'notifications/read': { req: TODO; res: TODO; };

	// page-push
	'page-push': { req: { pageId: Page['id']; event: string; var?: any; }; res: null; };

	// pages
	'pages/create': { req: TODO; res: Page; };
	'pages/delete': { req: { pageId: Page['id']; }; res: null; };
	'pages/featured': { req: {}; res: Page[]; };
	'pages/like': { req: { pageId: Page['id']; }; res: null; };
	'pages/show': { req: { pageId?: Page['id']; name?: string; username?: string; }; res: Page; };
	'pages/unlike': { req: { pageId: Page['id']; }; res: null; };
	'pages/update': { req: TODO; res: null; };

	// ping
	'ping': { req: TODO; res: TODO; };

	// pinned-users
	'pinned-users': { req: TODO; res: TODO; };

	// promo
	'promo/read': { req: TODO; res: TODO; };

	// request-reset-password
	'request-reset-password': { req: TODO; res: TODO; };

	// reset-password
	'reset-password': { req: { token: string; password: string; }; res: null; };

	// room
	'room/show': { req: TODO; res: TODO; };
	'room/update': { req: TODO; res: TODO; };

	// stats
	'stats': { req: {}; res: Stats; };

	// server-info
	'server-info': { req: {}; res: ServerInfo; };

	// sw
	'sw/register': { req: TODO; res: TODO; };

	// username
	'username/available': { req: TODO; res: TODO; };

	// users
	'users': { req: { limit?: number; offset?: number; sort?: UserSorting; origin?: OriginType; }; res: User[]; };
	'users/clips': { req: TODO; res: TODO; };
	'users/followers': { req: TODO; res: TODO; };
	'users/following': { req: TODO; res: TODO; };
	'users/gallery/posts': { req: TODO; res: TODO; };
	'users/get-frequently-replied-users': { req: TODO; res: TODO; };
	'users/groups/create': { req: TODO; res: TODO; };
	'users/groups/delete': { req: { groupId: UserGroup['id'] }; res: null; };
	'users/groups/invitations/accept': { req: TODO; res: TODO; };
	'users/groups/invitations/reject': { req: TODO; res: TODO; };
	'users/groups/invite': { req: TODO; res: TODO; };
	'users/groups/joined': { req: TODO; res: TODO; };
	'users/groups/owned': { req: TODO; res: TODO; };
	'users/groups/pull': { req: TODO; res: TODO; };
	'users/groups/show': { req: TODO; res: TODO; };
	'users/groups/transfer': { req: TODO; res: TODO; };
	'users/groups/update': { req: TODO; res: TODO; };
	'users/lists/create': { req: { name: string; }; res: UserList; };
	'users/lists/delete': { req: { listId: UserList['id']; }; res: null; };
	'users/lists/list': { req: {}; res: UserList[]; };
	'users/lists/pull': { req: { listId: UserList['id']; userId: User['id']; }; res: null; };
	'users/lists/push': { req: { listId: UserList['id']; userId: User['id']; }; res: null; };
	'users/lists/show': { req: { listId: UserList['id']; }; res: UserList; };
	'users/lists/update': { req: { listId: UserList['id']; name: string; }; res: UserList; };
	'users/notes': { req: { userId: User['id']; limit?: number; sinceId?: Note['id']; untilId?: Note['id']; sinceDate?: number; untilDate?: number; }; res: Note[]; };
	'users/pages': { req: TODO; res: TODO; };
	'users/recommendation': { req: TODO; res: TODO; };
	'users/relation': { req: TODO; res: TODO; };
	'users/report-abuse': { req: TODO; res: TODO; };
	'users/search-by-username-and-host': { req: TODO; res: TODO; };
	'users/search': { req: TODO; res: TODO; };
	'users/show': { req: ShowUserReq | { userIds: User['id'][]; }; res: {
		$switch: {
			$cases: [[
				{ userIds: User['id'][]; },
				UserDetailed[],
			]];
			$default: UserDetailed;
		};
	}; };
	'users/stats': { req: TODO; res: TODO; };
};