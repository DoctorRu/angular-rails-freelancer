export class Proposal {
    constructor(public id?: number,
                public customer?: string,
                public portfolio_url: string = 'http://',
                public tools?: string,
                public estimated_hours?: number,
                public hourly_rate?: number,
                public weeks_to_complate?: number,
                public client_email?: string) {
    }
}

// eg:
// 15, 'Abc company', 'http://matrix.com','Ruby on rails', 150, 120, 15, 'hi@hallo.com'


