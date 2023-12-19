import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import Accordion from "@/app/components/Accordion";

const Faq = () => {

    return (
        <>
            <Container>
                <Heading
                    title="FAQ"
                    subtitle="Answers to some questions"
                />
                <div className="mt-10 relative w-full">
                    <Accordion title='Faq question'>
                        <div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dolorem officiis quod impedit, illum sapiente nam magni minus fugit quibusdam aperiam est corrupti, reprehenderit quis iusto inventore vero maiores. Expedita.
                            </p>
                        </div>
                    </Accordion>
                    <Accordion title='Faq question'>
                        <div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dolorem officiis quod impedit, illum sapiente nam magni minus fugit quibusdam aperiam est corrupti, reprehenderit quis iusto inventore vero maiores. Expedita.
                            </p>
                        </div>
                    </Accordion>
                    <Accordion title='Faq question'>
                        <div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dolorem officiis quod impedit, illum sapiente nam magni minus fugit quibusdam aperiam est corrupti, reprehenderit quis iusto inventore vero maiores. Expedita.
                            </p>
                        </div>
                    </Accordion>
                    <Accordion title='Faq question'>
                        <div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dolorem officiis quod impedit, illum sapiente nam magni minus fugit quibusdam aperiam est corrupti, reprehenderit quis iusto inventore vero maiores. Expedita.
                            </p>
                        </div>
                    </Accordion>
                </div>
            </Container>
        </>
    )
}

export default Faq;