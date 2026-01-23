type Page = {
    NAME: string;
    DESCRIPTION: string;
}

interface Site extends Page {
    AUTHOR: string,
}

type Links = {
    TEXT: string,
    HREF: string,
}

type Socials = {
    NAME: string,
    ICON: string,
    TEXT: string,
    HREF: string,
}

export type { Page, Site, Links, Socials }
 

