import scientificPublicationImage from '../assets/img/ScientificPublications.png'
import {IArticle} from "./models/IArticle";


export interface ScientificPublicationsProps extends Omit<IArticle, 'id'> {
    id: string,
}

export const scientificPublicationsCardProps: ScientificPublicationsProps = {
    id: 'scientificPublications',
    title: 'научные публикации',
    time_ago: 'undefined',
    image: scientificPublicationImage,
    text: 'undefined',
    src_article: 'undefined',
    src_magazine: 'undefined',
    time: null,
}

export const earthSciPub_Hierarchy = {
    blackEarth: {
    },
    blueEarth: {
    },
    greyEarth: {
        'Архей': {}
    },
    livingEarth: {
        'Архей': {}
    },
    redEarth: {
        'Протерозой': {
            'Палеопротерозой': {}
        }
    },
    boringBillion: {
        'Неопротерозой': {},
        'Мезопротерозой': {}
    },
    whiteEarth: {
        'Палеозой': {
            'Кембрий': {
                'Акадский': {},
                'Ленский': {},
                'Алданский': {}
            }
        }
    },
    greenEarth: {
        'Кайнозой': {
            'Палеогеновая': {
                'Олигоцен': {},
                'Эоцен': {},
                'Палеоцен': {}
            }
        },
        'Мезозой': {
            'Меловая': {
                'Верхний': {},
                'Нижний': {}
            },
            'Юрская': {
                'Верхний': {},
                'Средний': {},
                'Нижний': {}
            },
            'Триасовая': {
                'Верхний': {},
                'Средний': {},
                'Нижний': {}
            },
        },
        'Пермская': {},
        'Каменноугольная': {
            'Верхний': {},
            'Средний': {},
            'Нижний': {}
        },
        'Девонская': {
            'Верхний': {},
            'Средний': {},
            'Нижний': {}
        },
        'Силурийская': {
            'Верхний': {},
            'Средний': {},
            'Нижний': {}
        },
        'Ордовикская': {
            'Верхний': {},
            'Средний': {},
            'Нижний': {}
        },
        'Фуронгский': {}
    },
    ageOfMan: {
        'Четвертичная': {},
        'Неогеновая': {
            'Миоцен': {}
        }
    },
    present: {},
    future: {}
}