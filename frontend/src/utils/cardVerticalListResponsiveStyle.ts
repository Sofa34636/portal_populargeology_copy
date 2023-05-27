export const cardVerticalListResponsiveStyle = (width: number) => {
    if (width <= 471) {
        return {verticalListWidth: 220, verticalListItemSize: 215}
    }
    if (width > 471 && width <= 670) {
        return {verticalListWidth: 335, verticalListItemSize: 280}
    } else if (width > 670 && width <= 830) {
        return {verticalListWidth: 335, verticalListItemSize: 280}
    } else if (width > 831 && width <= 991) {
        return {verticalListWidth: 190, verticalListItemSize: 200}
    } else if (width > 991 && width <= 1199) {
        return {verticalListWidth: 270, verticalListItemSize: 240}
    } else if (width > 1199 && width <= 1299) {
        return {verticalListWidth: 270, verticalListItemSize: 240}
    } else {
        return {verticalListWidth: 335, verticalListItemSize: 280}
    }
}