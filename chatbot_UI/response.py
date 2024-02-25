from langchain_google_genai import GoogleGenerativeAI
from langchain_community.vectorstores import Pinecone
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain_community.embeddings import GooglePalmEmbeddings
# from pinecone import Pinecone
import pinecone
import os

from dotenv import load_dotenv
load_dotenv()

PINECONE_API_KEY = os.environ.get('PINECONE_API_KEY')
PINECONE_API_ENV = os.environ.get("PINECONE_API_ENV")
pinecone.init(api_key=PINECONE_API_KEY, environment=PINECONE_API_ENV)

index_name = "langchainbot"  
index = pinecone.Index(index_name)
print(index.describe_index_stats())
# docsearch = Pinecone.from_index(index_name=index_name)
os.environ["GOOGLE_API_KEY"]
embedding = GooglePalmEmbeddings()

vectorstore = Pinecone(index, embedding, "text")

api_key = os.environ["GOOGLE_API_KEY"]
llm = GoogleGenerativeAI(model="models/text-bison-001", google_api_key=api_key, temperature=0.7)

QA = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=vectorstore.as_retriever())

print("Chatbot is ready to give response")

def response(input):
    query1 = f"{input}"
    output = QA.run(query1)
    return output

