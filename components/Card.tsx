const Card = () => {
    return (
        <div className="flex">
            <div className="h-36 w-36 min-w-36 border border-black"></div>
            <div className="flex flex-col ml-8">
                <h2 className="text-2xl ml-4">title</h2>
                <h3 className="text-xl">
                    Bacon ipsum dolor amet bacon tail cupim, spare ribs pancetta buffalo beef shoulder frankfurter pork
                    pork belly.
                </h3>
                <p className="text-base">
                    Bacon ipsum dolor amet bacon tail cupim, spare ribs pancetta buffalo beef shoulder frankfurter pork
                    pork belly. Kielbasa venison tri-tip, landjaeger jerky andouille cow tenderloin fatback buffalo
                    short loin burgdoggen. Pastrami brisket sirloin pork. Kevin ball tip short ribs pastrami
                    frankfurter.
                </p>
            </div>
        </div>
    );
};

export default Card;
