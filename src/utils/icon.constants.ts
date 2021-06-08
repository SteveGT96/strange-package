import { IconName } from '@fortawesome/fontawesome-common-types';
import path, { join } from 'path';

const baseUrl = "192.168.8.101:5000"

interface  EndPointInterface {
    baseUrl: string
    httpLink: string
    webSocketLink: string
}

export const EndPoint: EndPointInterface = {
    baseUrl: `http://${baseUrl}`,
    httpLink: `http://${baseUrl}/graphql`,
    webSocketLink: `ws://${baseUrl}/subscriptions`
}

export type IconType = "regular" | "thin" | "solid" | "brand" | "duotone";
export type IconSize = "fa-1x" | "fa-2x" | "fa-3x" | "fa-4x" | "fa-5x" | "fa-6x" | "fa-7x"
    | "fa-8x" | "fa-9x" | "fa-10x" | "fa-2xs" | "fa-xs" | "fa-sm" | "fa-lg" | "fa-xl" | "fa-2xl";
export type IconAnimation = "fa-spin" | "fa-spin-pulse" | "fa-spin fa-spin-reverse"
| "fa-spin-pulse fa-spin-reverse";
export type IconAnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
    | 'alternate, reverse' | 'alternate, normal' | 'alternate, reverse, normal' | 'reverse, normal'
    | 'initial' | 'inherit' | 'unset';

export type IconAnimationTiming = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' 
    | 'step-start' | 'step-end';


export const iconSource = (name: IconName, type: IconType="regular") => {
    return `../assets/svgs/${type}/${name}.svg`;
};