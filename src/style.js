import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1440px;
  min-height: min(850px, 100vh);
  margin: 0 auto;
  padding: 71px 24.5px;
  text-align: center;
  background-image: url("/bg-desktop.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top left;
  @media (max-width: 768px) {
    background-image: url("/bg-mobile.png");
    padding: 64px 24.5px;
  }
  h1 {
    font-size: 32px;
    line-height: 39px;
    text-transform: capitalize;
    color: var(--col-3);
    padding-bottom: 20px;
  }
  .option_switcher {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 35px;
    gap: 24px;
    & > p {
      font-size: 15px;
      line-height: 18px;
      text-transform: capitalize;
      color: var(--col-2);
    }
    .toggler {
      width: 56px;
      height: 32px;
      border-radius: 16px;
      background: var(--gradient);
      padding: 4px 5px;
      display: flex;
      align-items: center;
      &.anu {
        justify-content: flex-start;
      }
      &.mon {
        justify-content: flex-end;
      }
      &_circle {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: var(--col-1);
      }
    }
  }
  .options {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 32px;
    }
    .option {
      width: min(350px, 100%);
      padding: 34px 30px 31px;
      background-color: var(--white);
      display: flex;
      flex-direction: column;
      box-shadow: 2px 4px 15px 5px rgba(187, 187, 187, 0.46);
      border-radius: 10px;
      align-items: center;
      &_title {
        font-size: 18px;
        line-height: 22px;
        text-transform: capitalize;
        color: var(--col-2);
      }
      &_cost {
        padding-top: 19px;
        padding-bottom: 7px;
        font-size: 71px;
        line-height: 87px;
        letter-spacing: -0.02em;
        text-transform: capitalize;
        color: var(--col-4);
        display: flex;
        align-items: center;
        gap: 6px;
        span {
          font-size: 41px;
          line-height: 50px;
        }
      }
      &_line {
        width: 100%;
        height: 1px;
        background: var(--col-2);
        margin: 17px 0;
        border-radius: 5px;
      }
      &_benefit {
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.007em;
        color: var(--col-2);
      }
      &_button {
        margin-top: 17px;
        border-radius: 7px;
        background: var(--gradient);
        color: var(--col-1);
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.11em;
        text-transform: uppercase;
        width: 100%;
        padding: 13px 28px;
        border: 1px solid transparent;
        &:hover {
          background: transparent;
          border-color: #787aa3;
          color: #6f6cc3;
        }
      }
      &:nth-child(2) {
        background: var(--gradient-2);
        color: var(--col-1);
        .option_title,
        .option_cost,
        .option_benefit {
          color: var(--col-1);
        }
        .option_button {
          border: 1px solid var(--col-1);
          background: var(--col-1);
          color: var(--pirple);
          &:hover {
            background: transparent;
            border-color: var(--col-1);
            color: var(--col-1);
          }
        }
      }
      @media (min-width: 769px) {
        &:nth-child(1) {
          border-radius: 10px 0 0 10px;
        }
        &:nth-child(2) {
          padding: 57px 31px 54px;
          z-index: 2;
          color: var(--col-1);
          .option_title,
          .option_cost,
          .option_benefit {
            color: var(--col-1);
          }
          .option_button {
            border: 1px solid var(--col-1);
            background: var(--col-1);
            color: var(--pirple);
            &:hover {
              background: transparent;
              border-color: var(--col-1);
              color: var(--col-1);
            }
          }
        }
        &:nth-child(3) {
          border-radius: 0 10px 10px 0;
        }
      }
    }
  }
`;
