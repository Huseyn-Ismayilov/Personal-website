import Block from "./Block";
import BlockTitle from "./BlockTitle";
import SocialMedia from "./SocialMedia/ProfileSocialMedia";

export default function Follow() {
    return (
        <Block>
            <BlockTitle
                fontSize="text-lg"
                title="Follow my work on"
            />
            <SocialMedia />
        </Block>
    )
}