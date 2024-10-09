import { AdnFormControlComponent } from './AdnFormControl.type';
import { AdnFormControlBase } from './AdnFormControlBase';
import { AdnFormControlErrorMessage } from './AdnFormControlErrorMessage';
import { AdnFormControlLabel } from './AdnFormControlLabel';

const FormControl = AdnFormControlBase as AdnFormControlComponent;
FormControl.Label = AdnFormControlLabel;
FormControl.ErrorMessage = AdnFormControlErrorMessage;

const AdnFormControl = FormControl;

export { AdnFormControl };
