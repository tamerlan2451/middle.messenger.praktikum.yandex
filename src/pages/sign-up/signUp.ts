import { Block } from 'utils';
import { validateForm, ValifateRuleType } from 'helpers/validateForm';

export class SignUp extends Block {
  static componentName = 'SignUp';

  constructor() {
    super();

    this.setProps({
      labelClass: 'info',
      onSubmit: () => {
        const errorMessage = validateForm([
          {
            type: ValifateRuleType.Mail,
            value: this.refs.mailRef.refs.input.element.value,
          },
          {
            type: ValifateRuleType.Login,
            value: this.refs.loginInputRef.refs.input.element.value,
          },
          {
            type: ValifateRuleType.FirstName,
            value: this.refs.firstNameRef.refs.input.element.value,
          },
          {
            type: ValifateRuleType.LastName,
            value: this.refs.lastNameRef.refs.input.element.value,
          },
          {
            type: ValifateRuleType.Phone,
            value: this.refs.phoneRef.refs.input.element.value,
          },
          {
            type: ValifateRuleType.Password,
            value: this.refs.firstPasswordRef.refs.input.element.value,
          },
          {
            type: ValifateRuleType.Password,
            value: this.refs.lastPasswordRef.refs.input.element.value,
          },
        ]);

        this.refs.mailRef.refs.errorRef.setProps({
          text: errorMessage.mail,
        });

        this.refs.loginInputRef.refs.errorRef.setProps({
          text: errorMessage.login,
        });

        this.refs.firstNameRef.refs.errorRef.setProps({
          text: errorMessage.firstName,
        });

        this.refs.lastNameRef.refs.errorRef.setProps({
          text: errorMessage.lastName,
        });

        this.refs.phoneRef.refs.errorRef.setProps({
          text: errorMessage.phone,
        });

        this.refs.firstPasswordRef.refs.errorRef.setProps({
          text: errorMessage.password,
        });

        this.refs.lastPasswordRef.refs.errorRef.setProps({
          text: errorMessage.password,
        });

        if (
          this.refs.firstPasswordRef.refs.input.element.value !==
          this.refs.lastPasswordRef.refs.input.element.value
        ) {
          this.refs.lastPasswordRef.refs.errorRef.setProps({
            text: '???????????? ???? ??????????????????',
          });
        }

        console.log({
          mail: this.refs.mailRef.refs.input.element.value,
          login: this.refs.loginInputRef.refs.input.element.value,
          firstName: this.refs.firstNameRef.refs.input.element.value,
          lastName: this.refs.lastNameRef.refs.input.element.value,
          phone: this.refs.phoneRef.refs.input.element.value,
          firstPassword: this.refs.firstPasswordRef.refs.input.element.value,
          lastPassword: this.refs.lastPasswordRef.refs.input.element.value,
        });

        if (
          !errorMessage.mail &&
          !errorMessage.login &&
          !errorMessage.firstName &&
          !errorMessage.lastName &&
          !errorMessage.phone &&
          !errorMessage.password
        ) {
          window.location.href = './signIn';
          console.log('?? ?????????????? ?????? ?????????? ?????????????????????? ?????????? ????????????????');
        }
      },
    });
  }

  render() {
    return `
    <main>
      <div class='authPage'>
        <div class='authCart'>
          <h3>??????????????????????</h3>

            <form action=''>

            {{{ControlledInput
              labelClass=labelClass 
              ref="mailRef"
              name="email"
              placeholder="..."
              type="text"
              label="??????????"
            }}}

            {{{ControlledInput
              labelClass=labelClass 
              ref="loginInputRef"
              name="login"
              placeholder="..."
              type="login"
              label="??????????"
            }}}

            {{{ControlledInput
              labelClass=labelClass 
              ref="firstNameRef"
              name="first_name"
              placeholder="..."
              type="first_name"
              label="??????"
            }}}

            {{{ControlledInput
              labelClass=labelClass 
              ref="lastNameRef"
              name="second_name"
              placeholder="..."
              type="last_name"
              label="??????????????"
            }}}

            {{{ControlledInput
              labelClass=labelClass 
              ref="phoneRef"
              name="phone"
              placeholder="..."
              type="phone"
              label="??????????"
            }}}

            {{{ControlledInput
              labelClass=labelClass 
              ref="firstPasswordRef"
              name="password"
              placeholder="..."
              type="password"
              label="????????????"
            }}}

            {{{ControlledInput
              labelClass=labelClass 
              ref="lastPasswordRef"
              name="password"
              placeholder="..."
              type="password"
              label="???????????? (?????? ??????)"
            }}}
          </form>

          <div class='navigate-page-block-sign-up'>
              {{{SignButton onSubmit=onSubmit text="????????????????????????????????????"}}}
              {{{AuxiliaryButton text="??????????"}}}
          </div>
        </div>
      </div>
    </main>`;
  }
}
