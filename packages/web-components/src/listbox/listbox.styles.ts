import { css, ElementStyles } from '@microsoft/fast-element';
import {
  display,
  ElementDefinitionContext,
  focusVisible,
  forcedColorsStylesheetBehavior,
  FoundationElementDefinition,
} from '@microsoft/fast-foundation';
import { SystemColors } from '@microsoft/fast-web-utilities';
import {
  controlCornerRadius,
  designUnit,
  focusStrokeOuter,
  focusStrokeWidth,
  neutralStrokeRest,
  strokeWidth,
} from '../design-tokens';

export const listboxStyles: (
  context: ElementDefinitionContext,
  definition: FoundationElementDefinition,
) => ElementStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) =>
  css`
    ${display('inline-flex')} :host {
      border: calc(${strokeWidth} * 1px) solid ${neutralStrokeRest};
      border-radius: calc(${controlCornerRadius} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${designUnit} * 1px) 0;
      outline: none;
    }

    :host(:focus-within:not([disabled])) {
      border-color: ${focusStrokeOuter};
      box-shadow: 0 0 0 1px ${focusStrokeOuter} inset;
    }
  `.withBehaviors(
    forcedColorsStylesheetBehavior(
      css`
        :host(:${focusVisible}) ::slotted([aria-selected="true"][role="option"]) {
          background: ${SystemColors.Highlight};
          border-color: ${SystemColors.ButtonText};
          box-shadow: 0 0 0 calc(${focusStrokeWidth} * 1px) inset ${SystemColors.HighlightText};
          color: ${SystemColors.HighlightText};
          fill: currentcolor;
        }

        :host(:${focusVisible}) ::slotted([aria-selected="true"][role="option"]) {
          background: ${SystemColors.Highlight};
          border-color: ${SystemColors.ButtonText};
          box-shadow: 0 0 0 calc(${focusStrokeWidth} * 1px) inset ${SystemColors.HighlightText};
          color: ${SystemColors.HighlightText};
          fill: currentcolor;
        }

        ::slotted([role='option']:not([aria-selected='true']):not([disabled]):hover) {
          forced-color-adjust: none;
          color: ${SystemColors.ButtonText};
          background: ${SystemColors.ButtonFace};
          border-color: ${SystemColors.Highlight};
          box-shadow: none;
        }
      `,
    ),
  );
