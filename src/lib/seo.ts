interface FaviconLink {
	rel: string;
	sizes?: string;
	content?: string;
	name?: string
	type?: string;
	href: string
}

interface FaviconMeta {
	name?: string;
	content?: string;
}

export interface FaviconSettings {
	basic?: FaviconLink & { type: "image/x-icon", rel: "icon" }
	appleTouch?: FaviconLink & { rel: "apple-touch-icon", sizes: "180x180" }
	android?: {
		small?: FaviconLink & { type: "image/png", sizes: "192x192" }
		large?: FaviconLink & { type: "image/png", sizes: "512x512" }
	},
	ms?: {
		tileImage?: FaviconMeta & { name: "msapplication-TileImage" },
		tileColor?: FaviconMeta & { name: "msapplication-TileColor" }

	}
	svg?: FaviconLink & { type: "image/svg+xml" }
	png?: {
		small?: FaviconLink & { type: "image/png", sizes: "16x16" }
		large?: FaviconLink & { type: "image/png", sizes: "32x32" }
	}
	pwa?: FaviconLink & { rel: "manifest" },
	theme?: FaviconMeta & {
		name?: "theme-color"
	}
	safari?: {
		app?: FaviconMeta & { name: "apple-mobile-web-app-capable" }
		status?: FaviconMeta & { name: "applel-mobile-web-app-status-bar-style" }
	}
	windows?: FaviconMeta & { name: "msapplication-config" }
}

export interface BasicMeta {
	keywords?: string[];
	subject?: string;
	copyright?: string;
	language?: string;
	revised?: string;
	abstract?: string;
	topic?: string;
	summary?: string;
	classification?: string;
	author?: string;
	designer?: string;
	replyTo?: string;
	owner?: string;
	url?: string;
	identifierURL?: string;
	directory?: string;
	category?: string;
	coverage?: string
	distribution?: string;
	rating?: string;
	revisitAfter?: string;
}

export interface OGSettings {
	title?: string;
	url?: string;
	type?: string;
	site_name?: string;
	description?: string;

	email?: string;
	phone_number?: string;
	fax_number?: string;

	latitude?: string;
	longitude?: string;
	"street-address"?: string;
	locality?: string;
	locale?: {
		name?: string;
		alternate?: string
	};
	region?: string;
	"postal-code"?: string;
	"country-name"?: string;

	image?: {
		src?: string;
		secure_url?: string;
		type?: string;
		width?: string;
		height?: string;
		alt?: string;
	}

	video?: {
		src?: string;
		secure_url?: string;
		height?: number;
		width?: number;
		type?: string;
		movie?: {
			name: 'movie'
			director?: string;
			writer?: string;
			actor?: {
				name?: string;
				role?: string;
			};
			duration?: number;
			release_date?: string;
			tag?: string[]
		}
		episode?: {
			name: 'epsiode'
			actor?: {
				name?: string;
				role?: string;
			}
			director?: string;
			writer?: string;
			duration?: number;
			release_date?: string;
			tag?: string[]
			series?: string;
		}
		tv_show?: string;
		other?: string;
	}

	audio?: {
		name: 'audio'
		src?: string;
		secure_url?: string;
		title?: string;
		artist?: string;
		album?: string;
		type?: string;
	}

	music?: {
		name: 'music'
		duration?: number;
		album?: {
			name?: string;
			disc?: number;
			track?: number;
		};
		musician?: string;
		song?: {
			name?: string;
			disc?: string;
			track?: string;
		}
		release_date?: string;
		playlist?: {
			name?: string;
			creator?: string
		}
		radio_station?: {
			creator?: string;
		}
	}

	article?: {
		name: 'article'
		published_time?: string;
		modified_time?: string;
		expiration_time?: string;
		author?: string;
		section?: string;
		tag?: string[]
	}

	book?: {
		name: 'book'
		author?: string;
		isbn?: string;
		release_date?: string;
		tag?: string[]
	}

	profile?: {
		name: 'profile'
		first_name?: string;
		last_name?: string;
		username?: string;
		gender?: "male" | "female"
	}

	website?: string;
}
