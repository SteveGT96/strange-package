import React, {CSSProperties, FC} from 'react';
import { IconName } from '@fortawesome/free-regular-svg-icons';
import { IconAnimation, IconAnimationDirection, IconAnimationTiming, IconSize, IconType } from '../../../utils/icon.constants';
import { colors } from '../../../theme/theme';
import '../../../assets/fontawesome/css/all.min.css'
import '../../../theme/tailwind.scss';


interface DuotoneProps {
    primaryColor?: string;
    secondaryColor?: string;
    primaryOpacity?: number;
    secondaryOpacity?: number; 
}

interface AnimationProps {
    type: IconAnimation;
    duration?: string;
    direction?: IconAnimationDirection;
    timing?: IconAnimationTiming;
    iteration?: any;
}

export interface IconProps {
    name: IconName;
    type?: IconType;
    size?: IconSize;
    color?: string;
    duotone?: DuotoneProps;
    className?: string;
    animation?: AnimationProps;
}

export const Icon:FC<IconProps> = ({name, type="regular", animation, color, duotone, size, children, className}) => {
    type = duotone ?'duotone' : type;
    let classNames = `${size && size} ${animation && animation.type} fa-${name} fa-${type} ${className}`;
    const style = {
        "--fa-primary-color": duotone?.primaryColor??colors.gt['400'],
        "--fa-secondary-color": duotone?.secondaryColor??colors.gray['800'],
        "--fa-primary-opacity": duotone?.primaryOpacity??1,
        "--fa-secondary-opacity": duotone?.secondaryOpacity??1 ,
        "--fa-spin-direction": animation?.type && animation.type,
        "--fa-spin-duration": animation?.duration && animation.duration,
        "--fa-spin-iteration-count": animation?.iteration && animation.iteration,
        "--fa-spin-timing": animation?.timing && animation.timing,
    } as CSSProperties;

    return (
        <div
         className={classNames}
         style={style}
        >
        </div>
    );

}