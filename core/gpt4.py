import openai


def generateprompt(r):

    prompt = """
    write a product description for user that:{}
  """.format(r)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-0613",
        messages=[
            {"role": "system", "content": prompt},
        ]
    )
    answer = response['choices'][0]['message']['content']

    return answer

a=generateprompt('iphone')
print(a)