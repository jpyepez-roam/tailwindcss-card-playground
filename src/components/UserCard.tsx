// Avataaars API
// check out how the params work at:
// https://github.com/fangpenlin/avataaars-generator/issues/20
const avatarUrl =
    'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'

const UserCard = () => {
    return (
        <div>
            <div>
                <img src={avatarUrl} />
                <div>
                    <h5>John Doe</h5>
                    <p>Software Engineer</p>
                    <p>Auckland, New Zealand</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard
