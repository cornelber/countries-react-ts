export interface Country {
    name: {
        common: string;
        official: string;
    };
    cca2: string;
    region:  string;
    subregion?: string;
    population: number;
    flags: {
        svg: string;
        png: string;
    };
    capital?: string[]; 
}