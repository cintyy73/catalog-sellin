import { Heading, Stack, Text } from '@chakra-ui/react';

interface EmptyProps {
	title: string;
	description?: string;
}

export function Empty({ title, description }: EmptyProps) {
	return (
		<Stack align="center" py={14}>
			<Heading size="md">{title}</Heading>
			<Text color="gray">{description}</Text>
		</Stack>
	);
}
