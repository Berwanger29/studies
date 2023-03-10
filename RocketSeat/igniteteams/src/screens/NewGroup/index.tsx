import { useState } from "react";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";

import {
    Container,
    Content,
    Icon
} from "./styles";

export function NewGroup() {

    const navigation = useNavigation();

    const [group, setGroup] = useState('')

    async function handleNew() {
        try {
            await groupCreate(group)
            navigation.navigate('players', { group })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Container>
            <Header
                showBackButton
            />
            <Content>
                <Icon />
                <Highlight
                    title="Nova turma"
                    subtitle="cria a turma para adicionar pessoas"
                />
                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />
                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}