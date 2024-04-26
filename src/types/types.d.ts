interface BaseAttribute {
    id: number;
    code: string;
    name: string;
}

interface Size {
    height: number;
    width: number;
}

interface ColorAttribute extends BaseAttribute {
    color: string;
}

interface SizeAttribute extends BaseAttribute {
    size: Size;
}

interface WeightAttribute extends BaseAttribute {
    weight: number;
}

type Attribute = ColorAttribute | SizeAttribute | WeightAttribute;

type AttributeType = 'color' | 'size' | 'weight'

interface Product {
    id: number;
    name: string;
    attributes: Attribute[];
}