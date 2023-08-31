
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import "./style.scss";
import {useNavigate} from "react-router-dom";
const index = () => {

    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-center w-screen h-screen relative'>
            <Button className="absolute top-2 left-2" onClick={() => navigate(-1)}>Back</Button>
            <form className="flex w-[400px] flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="name@flowbite.com"
                        required
                        type="email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        required
                        type="password"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default index;