import time
import gradio as gr
from response import response

def slow_echo(message, history):
    output = response(message)
    for i in range(len(output)):
        # time.sleep(0.1)
        yield output[: i+1]

gr.ChatInterface(
    slow_echo,
    chatbot=gr.Chatbot(height=400),
    textbox=gr.Textbox(placeholder="Ask me any question", container=False, scale=7),
    title="NACO",
    description="Ask me any question",
    theme="soft",
    # examples=["Hello", "Am I cool?", "Are tomatoes vegetables?"],
    # cache_examples=True,
    retry_btn=None,
    undo_btn=None,
    clear_btn=None,
).launch()
