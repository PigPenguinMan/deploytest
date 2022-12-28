import '../css/Preview.css'

const Preview = (props) => {
    const preview = props.content;
    return (  
        <>
            <section className="contents">
                <div className="My_row">
                    <div className="cont_box">
                            <p className="title">{preview.title}</p>
                            <p className="desc">{preview.desc.split("\n").map((txt) => (
                                <>
                                {txt}
                                <br />
                                </>
                            ))}</p>
                            <p className="sub_desc">{preview.sub_desc}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Preview;