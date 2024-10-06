// export interface Country {
//     name: {
//         common: string;
//         official: string;
//     };
//     cca2: string;
//     region:  string;
//     subregion?: string;
//     population: number;
//     flags: {
//         svg: string;
//         png: string;
//     };
//     capital?: string[]; 
// }

export interface Country {
    name: {
        common: string;
        official: string;
        nativeName?: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    cca2: string;
    region: string;
    subregion?: string;
    population: number;
    flags: {
        svg: string;
        png: string;
        [key: string]: string; // Permitem alte formate de imagine
    };
    capital?: string[];
    tld?: string[];
    currencies?: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    languages?: {
        [key: string]: string;
    };
    borders?: string[];
}
