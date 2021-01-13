export interface Product {
    id: number;
    status: number;
    image_link?: string;
    is_image_link?: boolean;
    product: {
        code: string,
        id: number
    };
    score: number;
}