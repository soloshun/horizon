"use client";
import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "./Icons";

export function Select({
  name,
  options,
  defaultValue,
  labelledBy,
}: {
  name: string;
  options: readonly string[];
  defaultValue: string;
  labelledBy?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() =>
    Math.max(0, options.indexOf(defaultValue)),
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (open) optionRefs.current[active]?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  function commit(index: number) {
    const v = options[index];
    setValue(v);
    setActive(index);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onButtonKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  }

  function onListKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(options.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(options.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      commit(active);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div className="select" ref={rootRef}>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        ref={buttonRef}
        className="select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={labelledBy}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onButtonKeyDown}
      >
        <span>{value}</span>
        <Icon name="down" className="select-chevron" />
      </button>
      <ul
        id={listId}
        className="select-list"
        role="listbox"
        tabIndex={-1}
        aria-activedescendant={`${listId}-${active}`}
        data-open={open}
        onKeyDown={onListKeyDown}
      >
        {options.map((option, i) => (
          <li
            key={option}
            id={`${listId}-${i}`}
            ref={(el) => {
              optionRefs.current[i] = el;
            }}
            role="option"
            aria-selected={option === value}
            className="select-option"
            data-active={i === active}
            onMouseEnter={() => setActive(i)}
            onClick={() => commit(i)}
          >
            <span>{option}</span>
            {option === value && <Icon name="check" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
