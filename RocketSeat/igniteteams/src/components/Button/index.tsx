import { TouchableOpacityProps } from "react-native";
import {
    ButotnTypeStyleProps,
    Container,
    Title
} from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButotnTypeStyleProps
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    )
}