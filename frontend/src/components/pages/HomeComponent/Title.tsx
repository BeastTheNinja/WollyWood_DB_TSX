interface TitleProps {
    title: string;
}


export const Title = ({ title }: TitleProps) => {

    return (
        <>
            <h1 className="text-3xl text-[#D97852] p-5 font-[TitilliumWeb] text-left">{title}</h1>
        </>
    )
}