import { Image } from '@chakra-ui/react';

import { Sdg } from '@/types';

import { ods } from '@/utils/constant';

export interface OdsProps {
	sdg: Sdg;
}

export const Ods = ({ sdg }: OdsProps) => {
	const src = `/sdg/${sdg.id}.png`;

	const matchingOds = ods.find((item) => item.id === sdg.id);

	return (
		<a href={matchingOds?.link} target="_blank" rel="noreferrer">
			<Image
				src={src}
				alt={matchingOds?.name}
				borderRadius="5px"
				boxSize="48px"
			/>
		</a>
	);
};
