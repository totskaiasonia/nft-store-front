import { styled } from "@mui/material/styles";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";

import { FaUser } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";
import { RiAuctionFill } from "react-icons/ri";


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 27,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background:
                "#7E76DA",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background:
                "#7E76DA",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
        borderRadius: 1,
    },
}));
const ColorLibStepper = styled(Stepper)({
    '& .MuiStepLabel-label': {
        color: 'white',
        '& .Mui-active': {
            color: 'white'
        },
        '& .Mui-completed': {
            color: 'white'
        }
    },
    '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
    {
        color: 'white',
    },
    '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
    {
        color: 'white',
    },
});
const ColorlibStepIconRoot = styled("div")<{ownerState: { completed?: boolean; active?: boolean };}>(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.grey[700],
    zIndex: 1,
    color: "#fff",
    width: 60,
    height: 60,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient(136deg, #f09, #0ff)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient(136deg, #f09, #0ff)",
    }),
}));
  
function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
  
    const icons: { [index: string]: React.ReactElement } = {
        1: <FaUser />,
        2: <FaWallet />,
        3: <RiAuctionFill />,
    };
  
    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
}




const steps = [
    "Sign up",
    "Connect your wallet",
    "Start auction",
];
  

const MyStepper = () => {
    return (
        <ColorLibStepper
            alternativeLabel
            activeStep={1}
            connector={<ColorlibConnector />}
        >
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
            ))}
        </ColorLibStepper>
    )
}

export default MyStepper