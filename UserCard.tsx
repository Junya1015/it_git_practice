import { memo, VFC } from "react";
import { Box, Heading, Stack, Text } from '@chakra-ui/react';




export const UserCard: VFC = memo(() => {

    return (
        <Box 
            h={}
            w={}
            bg="BlackAlpha.50"
            border="2px" 
            borderStyle="solid" 
            borderColor="Blue.900" 
            borderRadius={12}
            boxShadow='md'
        >
            <Stack>
                <Heading as="h3">sgerww</Heading>
                <Opening></Opening>
            </Stack>   
        </Box>



    )
    





});


type CardDetail = {  
headline: string;
time: string;
performer: string;
heging: string;
width: string;
}