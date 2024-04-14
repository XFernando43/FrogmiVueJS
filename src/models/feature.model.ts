export interface Feature {
    id: number;
    identifier: string;
    mag: number;
    place: string;
    time: string;
    url: string;
    tsunami: null | boolean;
    mag_type: string;
    title: string;
    longitude: number;
    latitude: number;
    created_at: string;
    updated_at: string;
}
