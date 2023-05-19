import { Instrument, Time } from './timeline'

export interface LayoutProps {
    time: Time
    instrument: Instrument
    isFooterButtonsLeft?: boolean
    isFooterDisplayed?: boolean
    isHeaderDisplayed?:boolean
    firstCrumb?: string;
    secondCrumb?: string;

}
