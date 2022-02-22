import { FC } from 'react';
import { PlaceData } from '@/interface/place';

interface CardProps {
    data: PlaceData;
}

const Card: FC<CardProps> = ({ data }) => {
    return (
        <div className="flex">
            <div className="h-36 w-36 min-w-36 border border-black"></div>
            <div className="flex flex-col ml-8">
                <h2 className="text-2xl ml-4">{data?.title}</h2>
                <h3 className="text-xl">{data?.subtitle}</h3>
                <p className="text-base">{data?.desc}</p>
            </div>
        </div>
    );
};

export default Card;
