import scientificPublicationImage from '../assets/img/ScientificPublications.png'
import {IArticle} from "./models/IArticle";


export interface ScientificPublicationsProps extends IArticle {}

export const scientificPublicationsCardProps: ScientificPublicationsProps = {
    id: 0,
    title: 'научные публикации',
    time_ago: 'undefined',
    image: scientificPublicationImage,
    text: 'undefined',
    src_article: 'undefined',
    src_magazine: 'undefined',
}

const earthSciPub_Hierarchy = {
    blackEarth: {
        'Докембрий': {}
    },
    blueEarth: {
        'Докембрий': {}
    },
    greyEarth: {
        'Докембрий': {
            'Архей': {}
        }
    },
    livingEarth: {
        'Докембрий': {
            'Архей': {}
        }
    },
    redEarth: {
        'Докембрий': {
            'Протезой': {
                'Палеопротерозой': {}
            }
        }
    },
    boringBillion: {
        'Докембрий': {
            'Протозой': {
                'Мезопротезой': {},
                'Неопротерозой': {}
            }
        }
    },
    whiteEarth: {
        'Фареозой': {
            'Палеозой': {
                'Кембрий': {
                    'Акадский': {},
                    'Ленский': {},
                    'Алданский': {}
                }
            }
        }
    },
    greenEarth: {
        'Фареозой': {
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
            'Кайнозой': {
                'Палеогеновая': {
                    'Олигоцен': {},
                    'Эоцен': {},
                    'Палеоцен': {}
                }
            }
        }
    },
    ageOfMan: {
        'Фареозой': {
            'Кайнозой': {
                'Четвертичная': {},
                'Неогеновая': {
                    'Миоцен': {}
                }
            }
        }
    },
    present: {},
    future: {}
}