from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import GooglePalmEmbeddings
from langchain.chains import RetrievalQA
from langchain_google_genai import GoogleGenerativeAI

from dotenv import load_dotenv
load_dotenv()
import os
import sys
import json

os.environ["GOOGLE_API_KEY"]
api_key = os.environ["GOOGLE_API_KEY"]

raw_text = sys.argv[2]

text_splitter = CharacterTextSplitter(
    separator = "\n",
    chunk_size = 800,
    chunk_overlap = 200,
    length_function = len,
)
texts = text_splitter.split_text(raw_text)

embeddings = GooglePalmEmbeddings()
document_search = FAISS.from_texts(texts, embeddings)
llm = GoogleGenerativeAI(model="models/text-bison-001", google_api_key=api_key, temperature=0.7)
QA = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=document_search.as_retriever())

def response(input):
    query1 = f"{input}"
    output = QA.run(query1)
    return output